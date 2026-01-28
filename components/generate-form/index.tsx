"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { TextType } from "@/lib/types";

export default function GenerateForm() {
  const [textType, setTextType] = useState<TextType>("paragraph");
  return (
    <form className="flex flex-col space-y-4">
      <p className="text-black">Generate Form Component</p>
      {/* AMOUNT */}
      <div className="space-y-2">
        <Label htmlFor="amount" className="text-black">
          Amount
        </Label>
        <input id="amount"></input>
      </div>
      {/*  */}
      <div className="space-y-2">
        <Label htmlFor="textType" className="text-black">
          Text Type
        </Label>

        <Select
          value={textType}
          onValueChange={(value: TextType) => setTextType(value)}
        >
          <SelectTrigger id="textType">
            <SelectValue placeholder="Select a type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="paragraph">Paragraph</SelectItem>
            <SelectItem value="sentence">Sentence</SelectItem>
            <SelectItem value="word">Word</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/*  */}
      <div>
        <button
          type="submit"
          className="bg-blue-500 text-zinc-50 px-2 py-1 rounded"
        >
          Generate
        </button>
      </div>
    </form>
  );
}
