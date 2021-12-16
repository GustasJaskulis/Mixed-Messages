//Program on what to be grateful for
const emotion = ['grateful', 'thankful', 'appreciative']
const gratefulTo = ['parents', 'friends', 'best friend', 'mentors', 'teachers']
const gratefulAction = ['guiding through hardships', 'immense support', 'understanding my choices', 'being friendly and helpful', 'helping find my passion', ' helping me to understand myself']
    // Generates random message
const generateMessage = (feeling, person, action) => {
    return `I am ${feeling[Math.floor(Math.random() * feeling.length)]} to my ${person[Math.floor(Math.random() * person.length)]} for ${action[Math.floor(Math.random() * action.length)]}`
}
console.log(generateMessage(emotion, gratefulTo, gratefulAction))