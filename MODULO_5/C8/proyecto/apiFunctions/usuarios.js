import {readFile, writeFile} from "fs/promises";

import bcrypt from "bcrypt";

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