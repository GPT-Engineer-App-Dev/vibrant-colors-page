import React from "react";
import { Button } from "@chakra-ui/react";

const CreateProjectButton = () => {
  const handleClick = async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

    try {
      const response = await fetch("/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          description: "A new project created from the color search app",
        }),
      });

      const data = await response.json();
      console.log("Project created:", data);
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  return (
    <Button colorScheme="blue" onClick={handleClick}>
      Create GPT Engineer Project
    </Button>
  );
};

export default CreateProjectButton;
