import { IsOptional, IsString, IsBoolean, isDate, IsMongoId, IsDate } from "class-validator";
import { Type } from "class-transformer"

export class ChatMessageDto {
    @IsOptional()
    @IsString()
    tempId?: string;

    @IsString()
    message: string;

    @IsOptional()
    mediaFile?: {
    public_id: string;
    url: string;
    thumbnail?: {
      public_id: string;
      url: string;
    };
    mediaType: string;
    };

    @IsOptional()
    @IsMongoId()
    replyTo?: string;
  

    @IsMongoId()
  sender: string;

  @IsMongoId()
  receiver: string;

  @IsOptional()
  @IsBoolean()
  sent?: boolean;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  sentAt?: Date;

  @IsOptional()
  @IsBoolean()
  delivered?: boolean;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  deliveredAt?: Date;

  @IsOptional()
  @IsBoolean()
  seen?: boolean;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  seenAt?: Date;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  createdAt?: Date;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  updatedAt?: Date;
}