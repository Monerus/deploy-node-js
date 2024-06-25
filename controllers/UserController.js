import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import UserModel from '../models/User.js'

export const register = async (req, res) => {
    try {
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt)

        const doc = new UserModel({
            email: req.body.email,
            passwordHash: hash,
        })
        const user = await doc.save()

        const token = jwt.sign({ // Шифрование токена и каких-то данных
            _id: user._id,
        }, 'admin',
        {
            expiresIn: '30d'
        }
    )
    const { passwordHash, ...userData } = user._doc // Сокращение кода
    res.json({ // Запуск
        ...userData,
        token,
        message: 'Успешно зарегистрировались'
    })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: 'Данный пользователь уже занят'
        })
    }
}

export const login = async (req, res) => { // логин пользователя в монго дб
    try {
        const user = await UserModel.findOne({ email: req.body.email }) // Поиск пользователя по почте
        if(!user) {
            return res.status(404).json({
              message: 'Неверные данные'
            })
        }

        const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash) // Проверка пароля
        if(!isValidPass) { 
            return res.status(404).json({
                message: 'Неверные данные'
            })
        }

        const token = jwt.sign({ // шифруем что-то в юзере для безопасности 
            _id: user._id,
        }, 'admin',
        {
            expiresIn: '30d'
        },
        )   
        const { passwordHash, ...userData } = user._doc // создаем константу, чтобы сократить код и указать res.json

    res.json({
        ...userData, // не возвращаем юзера
        token, // и токен, прячем все это
        message: "Вы успешно вошли в систему"
    })
} catch (error) {
    console.log(error)
    res.status(500).json({
       message: 'Ошибка, не удалось войти' 
    })
 }
}

