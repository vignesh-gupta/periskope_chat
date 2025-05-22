"use client";

import React, { useState } from "react";
import { REGEXP_ONLY_DIGITS } from "input-otp";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";

export default function VerifyPage() {
  const [otp, setOtp] = useState("");

  const handleSubmit = async () => {
    // TODO: handle OTP verification
    alert(`Verifying OTP: ${otp}`);

    const { data,error } = await supabase.auth.verifyOtp({
      email: "vighneshgupta32@gmail.com",
      token: otp,
      type: "email",
    });

    console.log({
      data,
      error,
     });
    
  };

  return (
    <main className="flex justify-center items-center h-screen">
      <Card className="w-md">
        <CardHeader className="flex flex-col items-center">
          <h2>Verify OTP</h2>
        </CardHeader>
        <CardContent className="justify-center flex">
          <InputOTP
            maxLength={6}
            value={otp}
            onChange={setOtp}
            pattern={REGEXP_ONLY_DIGITS}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </CardContent>

        <CardFooter>
          <Button className="w-full" onClick={handleSubmit}>
            Verify
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
