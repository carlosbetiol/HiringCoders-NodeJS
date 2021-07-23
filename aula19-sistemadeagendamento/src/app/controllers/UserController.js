import User from '../models/User';
import Database from '../../database';
// o importe do index dentro de database nao aparece na aula, mas foi necessario colocar

class UserController {

    async store(req, res) {

        const userExists = await User.findOne({
            where: { email: req.body.email }
        });

        if (userExists) {
            return res.status(400).json({
                error: 'Usuário já cadastrado'
            });
        }

        // desestruturando para nao retornar a senha ao inves de colocar em uma variavel e retornar toda ela
        const { id, name, email, provider } = await User.create(req.body);

        return res.json({
            id,
            name,
            email,
            provider
        });
    }

    async update(req, res) {
        const { email, oldPassword } = req.body;

        const user = await User.findByPk(req.userId);

        if ( email && email != user.email) {
            const userExists = await User.findOne({
                where: { email }
            });

            if (userExists) {
                return res.status(400).json({
                    error: 'Email já utilizado para outro registro'
                });
            }
        }

        if( oldPassword && !(await user.checkPassword(oldPassword))){
            return res.status(401).json({
                message: 'Senha não confere'
            });
        }

        const { id, name, provider } = await user.update(req.body);

        return res.json({ 
            id,
            name,
            email,
            provider
         });

    }
}

export default new UserController();