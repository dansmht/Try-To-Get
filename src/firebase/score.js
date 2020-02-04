export class BestScore {
  static async setBestScore({ user, score, size }) {
    const bestScore = await BestScore.getBestScore(user, size)

    if (bestScore && bestScore.score > score) return

    if (bestScore && bestScore.score < score) {
      await fetch(`https://try-to-get.firebaseio.com/scores/${user}/${bestScore.key}.json`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }
    await fetch(`https://try-to-get.firebaseio.com/scores/${user}.json`, {
      method: 'POST',
      body: JSON.stringify({ score, size }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  static async getBestScore(user, size) {
    const res = await fetch(`https://try-to-get.firebaseio.com/scores/${user}.json`)
    const data = await res.json() || {}

    const key = Object.keys(data).find(key => size === data[key].size)
    return key ? { key, ...data[key] } : null
  }

  static async getBestScores() {
    const res = await fetch(`https://try-to-get.firebaseio.com/scores.json`)
    const data = await res.json()

    const scores = []
    Object.keys(data)
      .forEach(user => Object.keys(data[user])
        .forEach(key => scores.push({ ...data[user][key], user, id: key })))

    return scores
  }
}
