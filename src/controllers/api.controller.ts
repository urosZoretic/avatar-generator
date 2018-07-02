import {Router, Request, Response, NextFunction} from 'express';

export class ApiController {
    router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    public index(req: Request, res: Response, next: NextFunction) {
        res.json({
            error: false,
            message: '',
            data: {
                application: 'AvatarGenerator',
                platform: 'Node.JS',
                version: '1.0.0 '
            }
        });
    }

    public health(req: Request, res: Response, next: NextFunction) {
        res.send('Healthy');
    }

    init() {
        this.router.get('/', this.index);
        this.router.get('/health', this.health);
    }
}

const controller = new ApiController();
controller.init();

export default controller.router;