import {readFile, writeFile} from 'fs/promises'
import jwt from 'jsonwebtoken'

export const middlewareLogs = async (req, res, next) => {
    const logs = await readFile('logs.json')
    const logsArray = JSON.parse(logs)
    const log ={
        method: req.method,
        url: req.url,
        body: req.body,
        date: new Date().toISOString()
    }
    logsArray.push(log)
    await writeFile('logs.json', JSON.stringify(logsArray), 'utf8')
    next()
}


export const middlewareAuth = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]
    if(!token) return res.status(401).json({
        message: 'Token required'
    })
    try {
        const decoded = jwt.verify(token, 'mySecretKey')
        req.user = decoded
        next()
    }catch(err){
        console.log(err)
        res.status(403).json({
            message: 'Invalid token'
        })

    }
}