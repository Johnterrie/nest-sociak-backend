import { Injectable } from '@nestjs/common';
import { AdminDto } from './dto/admin.dto';

@Injectable()
export class AdminService {

    adminLogin(adminService: AdminDto) {
        const {email, password} = adminService
        if (!email) {
            return "wrong wrong email admin logins"
        }
        if (!password) {
            return "wrong wrong password admin logins"
        }


    }

}
