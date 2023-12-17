import { Button, FormComponents, Text } from "@/components";

export const LoginForm = () => {
  return (
    <div className="px-8 py-12 border border-gray-300 rounded-xl">
      <div className="flex flex-col ">
        <Text
          as="h2"
          weight={"bold"}
          align={"center"}
          size={"3xl"}
          className="mb-2"
        >
          Login
        </Text>

        <Text
          as="span"
          emphasis={"low"}
          size={"sm"}
          align={"center"}
          className="mb-8"
        >
          Login Here
        </Text>

        <Text
          as="label"
          htmlFor="username"
          size={"sm"}
          weight={"medium"}
          className="mb-1.5"
        >
          Username
        </Text>
        <FormComponents
          type="text"
          id="username"
          placeholder="Username"
          className="mb-4"
        />

        <Text
          as="label"
          htmlFor="password"
          size={"sm"}
          weight={"medium"}
          className="mb-1.5"
        >
          Password
        </Text>
        <FormComponents id="password" type="password" placeholder={"Password"} />

        <Button type="submit" variant={"solid"} className="mt-10">
          Login
        </Button>
      </div>
    </div>
  );
};
