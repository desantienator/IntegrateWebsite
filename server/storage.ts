import { users, newsletterSubscriptions, contactSubmissions, type User, type InsertUser, type Newsletter, type InsertNewsletter, type Contact, type InsertContact } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  subscribeNewsletter(subscription: InsertNewsletter): Promise<Newsletter>;
  submitContact(contact: InsertContact): Promise<Contact>;
  getNewsletterSubscriptions(): Promise<Newsletter[]>;
  getContactSubmissions(): Promise<Contact[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private newsletters: Map<number, Newsletter>;
  private contacts: Map<number, Contact>;
  private currentUserId: number;
  private currentNewsletterId: number;
  private currentContactId: number;

  constructor() {
    this.users = new Map();
    this.newsletters = new Map();
    this.contacts = new Map();
    this.currentUserId = 1;
    this.currentNewsletterId = 1;
    this.currentContactId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async subscribeNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    // Check if email already exists
    const existingSubscription = Array.from(this.newsletters.values()).find(
      (sub) => sub.email === insertNewsletter.email
    );
    
    if (existingSubscription) {
      throw new Error("Email already subscribed");
    }

    const id = this.currentNewsletterId++;
    const newsletter: Newsletter = { 
      ...insertNewsletter, 
      id, 
      createdAt: new Date() 
    };
    this.newsletters.set(id, newsletter);
    return newsletter;
  }

  async submitContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = { 
      ...insertContact, 
      id, 
      createdAt: new Date(),
      company: insertContact.company || null
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getNewsletterSubscriptions(): Promise<Newsletter[]> {
    return Array.from(this.newsletters.values());
  }

  async getContactSubmissions(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }
}

export const storage = new MemStorage();
