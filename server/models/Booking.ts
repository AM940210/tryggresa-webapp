import mongoose, { Schema, Document } from "mongoose";

export interface IBooking extends Document {
    user: mongoose.Types.ObjectId;
    type: "sjukresa" | "färdtjänst";
    pickupAddress: string;
    destinationAddress: string;
    date: string; // YYYY-MM-DD
    time: string; // HH:MM
    notes?: string;
    status: "bokad" | "avbokad" | "slutförd";
}

const BookingSchema = new Schema<IBooking>(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        type: {
            type: String,
            enum: ["sjukresa", "färdtjänst"],
            required: true,
        },

        pickupAddress: {
            type: String,
            required: true,
            minlength: 3,
        },

        destinationAddress: {
            type: String,
            required: true,
            minlength: 3,
        },

        date: {
            type: String,
            required: true,
            match: [/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)"],
        },

        time: {
            type: String,
            required: true,
            match: [/^\d{2}:\d{2}$/, "Invalid time format (HH:mm)"],
        },

        notes: {
            type: String,
            maxlength: 2000,
        },

        status: {
            type: String,
            enum: ["bokad", "avbokad", "slutförd"],
            default: "bokad",
        },
    },
    { timestamps: true }
);

export default mongoose.model<IBooking>("Booking", BookingSchema);