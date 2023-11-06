import { Store } from "../../models/store";

export const index = (req: any, res: any) => {
    res.send('Hello World!');
}

export class AppController {

    public async index(req: any, res: any) {
        // const store = await Store
        // .select('a.*, b.* ')
        // .joins('LEFT JOIN schedules b ON a.id = b.store_id')
        // .get();
        // console.log(Store.create(''));
        // return res.json(store);
    }

    private defaultHeader(res: any) {
        res.setHeader('Content-Type', 'application/json');
        return res;
    }
}