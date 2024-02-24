"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { contactData } from "@/utils/contact-data";
import Link from "next/link";
//email

const ContactPage = () => {
  return (
    <div className="grid items-start gap-5">
      <div className="flex items-center justify-between px-2">
        <div className="grid gap-1">
          <h1 className="text-3xl md:text-4xl ">Contact</h1>
          <p className="text-lg text-muted-foreground">Personal and links</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2">
        <div>
          <h2 className="mt-5 text-lg md:text-xl font-semibold">Personal</h2>

          {contactData.slice(0, 2).map((option) => (
            <Card
              key={option.id}
              className="flex flex-col sm:flex-row items-center m-2 p-3"
            >
              <CardHeader>
                <CardDescription>{option.title}</CardDescription>
              </CardHeader>
              <CardContent className="sm:p-3">
                <p className="text-sm sm:text-base">{option.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div>
          <h2 className="mt-5 text-lg md:text-xl font-semibold">Links</h2>

          {contactData.slice(2, 4).map((option) => (
            <Card
              key={option.id}
              className="flex flex-col sm:flex-row items-center m-2 p-3"
            >
              <CardHeader>
                <CardDescription>{option.title}</CardDescription>
              </CardHeader>
              <CardContent className="sm:p-3">
                <Link
                  href={option.value}
                  className="hover:underline text-sm sm:text-base cursor-pointer"
                  target="_blank"
                >
                  visit profile
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
