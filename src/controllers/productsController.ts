import { Request, Response} from 'express';
class ProductsController {
    static index(req: Request, res: Response){
        return res.json({ rotaProducts: "Bem vindo rota produtos!"})
    }
    static userproducts(req: Request, res: Response){
        return res.json({ rotaProducts: "Meus produtos!"})
    }
    static favorited(req: Request, res: Response){
        return res.json({ rotaProducts: "Favoritado!"})
    }
    static unfavoritd(req: Request, res: Response){
        return res.json({ rotaProducts: "Desfavoritado!"})
    }
}

export default ProductsController