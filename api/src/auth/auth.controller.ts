import { Body, Controller, HttpCode, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { GetCurrentUser, Public } from 'src/common/decorators';
import { RtGuard } from 'src/common/guards';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { Tokens } from './types';

@Controller('auth')
export class AuthController {

    constructor(private authService:AuthService){}

    @Public()
    @Post('local/signup')
    @HttpCode(HttpStatus.CREATED)
    signUpLocal(@Body() dto:AuthDto) : Promise<Tokens>{
        return this.authService.signUpLocal(dto);
    }

    @Public()
    @Post('local/signin')
    @HttpCode(HttpStatus.OK)
    signInLocal(@Body() dto:AuthDto) : Promise<Tokens>{
        return this.authService.signinLocal(dto);
    }

    @Post('logout')
    @HttpCode(HttpStatus.OK)
    logout(@GetCurrentUser('sub') userId:number){
        return this.authService.logout(userId);
    }

    @Public()
    @UseGuards(RtGuard)
    @Post('refresh')
    @HttpCode(HttpStatus.OK)
    refreshTokens(
        @GetCurrentUser('sub') userId:number ,
        @GetCurrentUser('refreshToken') token:string){
        return this.authService.refreshTokens(userId,token);
    }
}
