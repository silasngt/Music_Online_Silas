"use client"
import FormButton from "@/app/components/form/FormButton";
import FormInput from "@/app/components/form/FormInput";
import Title from "@/app/components/title/Title";
import { authFirebase, dbFirebase } from "@/app/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  // Để khi đăng kí xong chuyển hướng sang trang chủ
  const router = useRouter();
  const handlRegister = (event:any) => {
    event.preventDefault();
    const fullName = event.target.fullName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;


      createUserWithEmailAndPassword(authFirebase, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        set(ref(dbFirebase,"user/" + user.uid),{
          fullName:fullName
        }) . then(() => {
          // Đăng kí thành công sẽ được chuyển sang trang chủ
          router.push("/");
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
    return (
    <>
     
    
      <div className="w-[500px] mx-auto mt-[60px]">
        <Title text="Đăng Ký Tài Khoản" className="text-center"/>
        <form className="" onSubmit={handlRegister}>
          <FormInput
          label="Họ Tên"
          type="text"
          name="fullName"
          id="fullName"
          placeholder="Ví dụ : Le Van A"
          required="true"
          />
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
          <FormButton text="Đăng Ký"/>
        </form>
      </div>
    </>
    );
  }
  