import { Controller, Get, Query, Param, Post, Body, Put, Delete, HttpCode, HttpStatus, HttpException, NotFoundException, ParseUUIDPipe, ValidationPipe, UseGuards } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';
import { ProfilesGuard } from './profiles.guard';
import { NotFoundError } from 'rxjs';
import type { UUID } from 'crypto';

@Controller('profiles')
export class ProfilesController {
    constructor(private readonly profilesService: ProfilesService) { }
    // Get /profiles
    @Get()
    findAll() {
        // Logic to retrieve profiles by location
        return this.profilesService.findAll();
    }

    // Get /profile/:id
    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: UUID) {
        // Logic to retrieve a profile by id
        try {
            return this.profilesService.findOne(id);
        } catch (error) {
            throw new NotFoundException(error.message);
        }
    }

    // Post /profiles
    @Post()
    create(@Body(new ValidationPipe) createProfileDto: CreateProfileDto) {
        return this.profilesService.create(createProfileDto);
    }

    // Put /profiles/:id
    @Put(':id')
    update(
        @Param('id', ParseUUIDPipe) id: UUID,
        @Body() updateProfileDto: UpdateProfileDto) {
        return this.profilesService.update(id, updateProfileDto);
    }

    // Delete /profiles/:id
    @Delete(':id')
    @UseGuards(ProfilesGuard)
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id', ParseUUIDPipe) id: UUID) {
        this.profilesService.remove(id);
        return { id };
    }
}

