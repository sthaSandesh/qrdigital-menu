'use client';

import { pb } from "@/lib/pocketbase";
import { Button, Input } from "@edge-ui/react";
import { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import Admin from "./(comp)/admin";

export default function AdminPanel() {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginPrompt, setLoginPrompt] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      setLoading(true);
      const res = await pb.admins.authWithPassword(email, password);
      if (!res.admin) throw 'Failed to login';
      setLoggedIn(true);
      setLoading(false);
    } catch(e) {
      setLoading(false);
      alert(`${e}`);
    }
  };

  useEffect(() => {
    pb.admins.authRefresh()
    .then(() => setLoggedIn(true))
      .catch(() => {
        setLoginPrompt(true);
      })
  }, []);


  if (loggedIn) return <Admin/>;

      if (loginPrompt) {
        return <div className="grid place-items-center h-screen"><div className="flex items-center flex-col gap-4">
        <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
        <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
        <Button onClick={login}>Login</Button>
      </div></div>
      }
  if (loading) return <div className="h-screen grid place-items-center">
      <CgSpinner className="h-8 w-8 text-primary animate-spin"/>
    </div>

    return <></>

}