import { Response } from "express";
import Booking from "../models/Booking";
import { AuthRequest } from "../middleware/authMiddleware";

// Create booking
export async function createBooking(req: AuthRequest, res: Response) {
    try {
        const booking = new Booking({
            user: req.user.id,
            type: req.body.type,
            pickupAddress: req.body.pickupAddress,
            destinationAddress: req.body.destinationAddress,
            date: req.body.date,
            time: req.body.time,
            notes: req.body.notes,
        });

        await booking.save();

        return res.status(201).json({
            message: "Resa bokad",
            booking,
        });
    } catch (err) {
        return res.status(500).json({ message: "Kunde inte skapa bokning" });
    }
}

// Get all bookings for logged in user
export async function getBookings(req: AuthRequest, res: Response) {
    try {
        const bookings = await Booking.find({ user: req.user.id }).sort({ date: 1});
        return res.json(bookings);
    } catch (err) {
        return res.status(500).json({ message: "Kunde inte hämta bokningar" });
    }
}

// Update booking
export async function updateBooking(req: AuthRequest, res: Response) {
    try {
        const booking = await Booking.findOneAndUpdate(
            { _id: req.params.id, user: req.user.id },
            req.body,
            { new: true }
        );

        if (!booking) {
            return res.status(404).json({ message: "Bokning hittades inte "});
        }

        return res.json({ message: "Bokning uppdaterad", booking });
    } catch (err) {
        return res.status(500).json({ message: "Kunde inte uppdatera bokning" });
    }
}

// Cancel booking (delete)
export async function deleteBooking(req: AuthRequest, res: Response) {
    try {
        const booking = await Booking.findOneAndDelete({
            _id: req.params.id,
            user: req.user.id,
        });

        if (!booking) {
            return res.status(404).json({ message: "Bokning hittades inte" });
        }

        return res.json({ message: "Bokning avbokad" });
    } catch (err) {
        return res.status(500).json({ message: "Kunde inte avboka" });
    }
}