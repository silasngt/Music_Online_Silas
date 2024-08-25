"use client"
import FormButton from "@/app/components/form/FormButton";
import FormInput from "@/app/components/form/FormInput";
import Title from "@/app/components/title/Title"
import { authFirebase } from "@/app/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const handleLogin = (event:any) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInWithEmailAndPassword(authFirebase, email, password)
    .then((userCredential) => {
    const user = userCredential.user;
    if(user){
      router.push("/")
    }
    })
    .catch((error) => {
      alert("Email hoặc mật khẩu không chính xác");
    });
  }
    return (
    <>
      <div className="w-[500px] mx-auto mt-[60px]">
        <Title text="Đăng Nhập Tài Khoản" className="text-center"/>
        <form onSubmit={handleLogin}>
          <FormInput
          label="Email"
          type="email"
          name="email"
          id="email"
          placeholder="levana@gmail.com"
          required="true"
          />
          <FormInput
          label="Mật Khẩu"
          type="password"
          name="password"
          id="password"
          required="true"
          />
          <FormButton text="Đăng Nhập"/>
        </form>
      </div>
    </>
    );
  }
  