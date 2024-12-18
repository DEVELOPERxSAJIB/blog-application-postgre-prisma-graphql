"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const FormSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().nonempty({
    message: "Description must be provided",
  }),
  category: z.string().nonempty({
    message: "Category must be provided",
  }),
  imageURL: z.string().nonempty({
    message: "Image URL must be provided",
  }),
  blogURL: z.string().nonempty({
    message: "Dedicated blog URL must be provided",
  }),
});

const CreateBlog = () => {

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      description: "",
      category : "",
      imageURL: "",
      blogURL: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // })
  }

  return (
    <Card className="p-4 w-1/2 mx-auto">
      <div className="py-3 text-center">
        <h2 className="text-2xl border-t border-8 border-purple-600">Create new post</h2>
      
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Your blog desc" {...field} />
                  </FormControl>
                  <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Input placeholder="Your blog category" {...field} />
                  </FormControl>
                  <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="imageURL"
            render={({ field }) => (
              <FormItem>
                  <FormLabel>Image Url</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Image URL" {...field} />
                  </FormControl>
                  <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="blogURL"
            render={({ field }) => (
              <FormItem>
                  <FormLabel>Blog Url</FormLabel>
                  <FormControl>
                    <Input placeholder="Your blog url" {...field} />
                  </FormControl>
                  <FormMessage />
              </FormItem>
            )}
          />
          <div className="text-end">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </Card>
  );
};

export default CreateBlog;
