import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertNewsletterSchema, insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Newsletter subscription endpoint
  app.post("/api/newsletter/subscribe", async (req, res) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      const subscription = await storage.subscribeNewsletter(validatedData);
      res.json({ success: true, subscription });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, message: "Invalid email format" });
      } else if (error instanceof Error && error.message === "Email already subscribed") {
        res.status(409).json({ success: false, message: "Email already subscribed" });
      } else {
        res.status(500).json({ success: false, message: "Failed to subscribe" });
      }
    }
  });

  // Contact form submission endpoint
  app.post("/api/contact/submit", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.submitContact(validatedData);
      res.json({ success: true, contact });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Please fill in all required fields correctly",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ success: false, message: "Failed to submit contact form" });
      }
    }
  });

  // Get all newsletter subscriptions (for admin purposes)
  app.get("/api/newsletter/subscriptions", async (req, res) => {
    try {
      const subscriptions = await storage.getNewsletterSubscriptions();
      res.json({ success: true, subscriptions });
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to fetch subscriptions" });
    }
  });

  // Get all contact submissions (for admin purposes)
  app.get("/api/contact/submissions", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json({ success: true, submissions });
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to fetch submissions" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
