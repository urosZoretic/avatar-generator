import {Router, Request, Response, NextFunction} from 'express';
import {AvatarService} from '../services/avatar.service';

export class AvatarController {
    router: Router;
    private readonly service: AvatarService;

    constructor() {
        this.router = Router();
        this.service = AvatarService;
        this.init();
    }

    public getAvatar(req: Request, res: Response, next: NextFunction): void {
        res.json({error: false,
            message: '',
            data: AvatarService.generateAvatar(req.query.gender, req.query.name)
        });
    }

    init(): void {
        this.router.get('/', this.getAvatar);
    }
}

const controller = new AvatarController();
controller.init();

export default controller.router;