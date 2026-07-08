import { Router } from "express";

const router = Router()

const data = []

router.post('/add', (req, res) => {
    try {
        let { name, description, price, rating } = req.body
        name = validateStr(name)
        description = validateStr(description)

        if (!name) return res.status(400).json({ message: 'Name must be between 3 to 20 characters' })
        if (!description) return res.status(400).json({ message: 'Description must be between 3 to 20 characters' })
        if (!validateNum(price, 10000)) return res.status(400).json({ message: 'Please enter price within limit' })
        if (!validateNum(rating, 5)) return res.status(400).json({ message: 'Please enter rating within limit' })

        data.push({ name, description, price, rating, id: data.length + 1 })

        return res.status(201).json({ message: 'Dish created successfully', data })
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong' })
    }
})

function validateStr(str) {
    str = str.trim()
    if (str.length < 3 || str.length > 20) return false
    return str
}

function validateNum(num, lim) {
    if (num <= 0 || num > lim) return false
    return true
}

export { router as menuRoute }