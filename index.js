const express = require('express')
const app = express()
const courses = require('./Data/courses.json')
const cors = require('cors')
const port = process.env.PORT || 5000
app.use(cors())
app.get('/', (req, res) => {
    res.send('Start Now')
})
app.get('/courses', (req, res) => {
    res.send(courses)
})
app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const uniqueCourse = courses.find(course => course.id == id)
    res.send(uniqueCourse)
})
app.get('/courseDetails/:id', (req, res) => {
    const idDetail = req.params.id;
    const uniqueCourseDetails = courses.find(courseD => courseD.id == idDetail)
    res.send(uniqueCourseDetails)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})