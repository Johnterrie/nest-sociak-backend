import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose"

export type ChatMessageDocument = ChatMessage & Document;

@Schema()
export class ChatMessage{
    @Prop()
    tempId: string;
  
    @Prop()
    message: string;
  
    @Prop()
    mediaFile: {
      public_id: string;
      url: string;
      thumbnail: {
        public_id: string;
        url: string;
      };
      mediaType: string;
    };
  
    @Prop({ type: 'ObjectId', ref: 'ChatMessage' })
    replyTo: string;
  
    @Prop({ type: 'ObjectId', ref: 'User' })
    sender: string;
  
    @Prop({ type: 'ObjectId', ref: 'User' })
    receiver: string;
  
    @Prop({ default: true })
    sent: boolean;
  
    @Prop({ default: Date.now })
    sentAt: Date;
  
    @Prop({ default: false })
    delivered: boolean;
  
    @Prop()
    deliveredAt: Date;
  
    @Prop({ default: false })
    seen: boolean;
  
    @Prop()
    seenAt: Date;
  
    @Prop({ default: Date.now })
    createdAt: Date;
  
    @Prop({ default: Date.now })
    updatedAt: Date;
}

export const ChatMessageSchema = SchemaFactory.createForClass(ChatMessage);

