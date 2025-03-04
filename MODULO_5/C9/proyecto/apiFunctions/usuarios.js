import {readFile, writeFile} from "fs/promises";
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt";

const SECRET_KEY = 'mySecretKey'

export const createUser = async (req, res) => {
    const { user, password } = req.body
    const users = await readFile('users.json')
    const usersArray = JSON.parse(users)

    if(!user || !password) return res.status(400)
        .json({ error: 'User and password are required' })

    const existUser = usersArray.some((userItem) => userItem.user === user)
    if(existUser) return res.status(409)
        .json({ error: 'User already exists' })
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = { user, password: hashedPassword}
    usersArray.push(newUser)
    await writeFile('users.json', JSON.stringify(usersArray))
    res.status(201).json({ message: 'User created successfully' })

}
export const login = async (req, res) => {
    const { user, password} = req.body
    if(!user || !password) return res.status(400)
        .json({ error: 'User and password are required' })
    const users = await readFile('users.json')
    const usersArray = JSON.parse(users)

    const foundUser = usersArray.find(userItem => userItem.user === user)
    if(!foundUser) return res.status(401)
        .json({ error: 'Invalid credentials' })
    const isMatch = await bcrypt.compare(password, foundUser.password)
    if(!isMatch) return res.status(401)
        .json({ error: 'Invalid credentials' })

    const token = jwt.sign({
        user: foundUser.user,
        ejemplo: 'ejemplo'
    }, SECRET_KEY, { expiresIn: '1h'})
    console.log(token)
    res.status(200).json({ message: 'Login successful', data: {
        token: token,
        user: foundUser.user
    } })
}