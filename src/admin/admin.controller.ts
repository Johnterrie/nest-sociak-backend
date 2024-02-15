import { Controller, Post } from '@nestjs/common';


@Controller('admin')
export class AdminController {
    @Post("login")
    findAll(): string {
        return "we are coming"
    }


}
