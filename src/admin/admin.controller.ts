import { Controller, Post, Get, Delete, Put, Body } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminDto } from './dto/admin.dto';
@Controller('admin')


export class AdminController {

    constructor(private readonly adminService: AdminService) {}

    // POST ROUTES

    @Post("login")
    adminLogin(@Body() adminService: AdminDto ) {
        return this.adminService.adminLogin(adminService)
    }

    @Post("forgot-password")
    adminForgetPassword() {
        return "not still working"
    }

    @Post("reset-password")
    adminResetPassword() {
        return "reset-password"
    }

    @Post("change-password")
    adminChangePassword() {
        return "change-password"
    }

    // GET ROUTES

    // get progress
    @Get("get-progress")
    adminGetProgress() {
        return "get progress"
    }

    //
    @Get("get-stats")
    adminGetStats() {
        return "get stats"
    }

    @Get("get-monthly-stats")
    adminGetMonthlyStats() {
        return "get monthly stats"
    }

    // get recent Users
    @Get("get-recent-users")
    adminGetRecentUsers() {
        return "get recent users"
    }

    //get all users
    @Get("get-users")
    adminGetUsers() {
        return "get all users"
    }


    //get verified users stats
    @Get("get-verified-users-stats")
    adminGetVerifiedUsers() {
        return "get verified users"
    }

    //search users 
    @Get("search-users")
    adminSearchUsers() {
        return "search users"
    }

    // DELETE USER
    //delete users 
    @Delete ("delete-users")
    adminDeleteUsers() {
        return "delete users"
    }

    //get user users details
    @Get("get-user-details")
    adminGetUserDetails() {
        return "get user details"
    }

    //update user role
    @Put("update-role")
    adminUpdateUserRole() {
        return "update user role"
    }

    @Put("update-status")
    adminUpdateAccountStatus() {
        return "update Account status"
    }

    @Put("update-verification-status")
    adminUpdateVerificationStatus() {
        return "update verification status"
    }

    // GET ALL POSTS

    @Get("posts")
    adminGetAllPosts() {
        return "get all post"
    }

    @Get("get-posts-details")
    adminGetPostsDetails() {
        return "get post details"
    }

    @Get("get-recent-posts")
    adminGetRecentPosts() {
        return "get recent post"
    }


    // get all comment
    @Get("get-comments")
    adminGetComment() {
        return "get comment"
    }

    //get verfifcation Requests
    @Get("verification-request")
    adminGetVerificatonRequest() {
        return "get verification request"
    }

    @Get("verification-request-details")
    adminGetVerificationRequestDetails() {
        return "get verification request details"
    }


    @Get("approve-verification-request")
    adminGetApproveVerificationRequest() {
        return "get approve verification request"
    }

    @Get("reject-verification-request")
    adminGetRejectVerificationRequest() {
        return "get reject verification request"
    }

    @Get("remove-verification-status")
    adminGetRemoveVerificationStatus() {
        return "get remove verification request details"
    }

    //project routesa

    //get projects 
    @Get("projects")
    adminGetProjects() {
        return "get all projects"
    }

    @Get("get-projects-details")
    getProjectsDetails() {
        return "get all projects details"
    }


    @Get("search-project")
    adminSearchProjects() {
        return "search all projects"
    }

    @Put ("update-project")
    adminUpdateProjects() {
        return "update all projects"
    }

    


    



    




}
