"use client";
import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  Text,
  VStack,
  Flex,
  Avatar,
  Box,
  Link,
  useToast
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const HistoryModal = ({ isOpen, onClose }) => {
  const [searchHistory, setSearchHistory] = useState([]);
  const toast = useToast();

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("github-users")) || [];
    setSearchHistory(users);
  }, []);

  const handleDeleteUser = (userId) => {
    const users = JSON.parse(localStorage.getItem("github-users")) || [];
    const userToDelete = users.find((user) => user.id === userId);
    if (userToDelete) users.splice(users.indexOf(userToDelete), 1);

    localStorage.setItem("github-users", JSON.stringify(users));
    setSearchHistory(users);
    toast({
      title: "Success",
      description: "User deleted successfully",
      status: "success",
      duration: 3000,
      isClosable: true
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={"gray.900"}>
        <ModalHeader>Search History</ModalHeader>
        <ModalBody>
          <Text>Users you have searched for:</Text>
          <VStack gap={4} maxHeight={300} overflowY={"auto"} my={4}>
            {searchHistory.length === 0 && (
              <Text color={"gray.400"} fontSize={"sm"} fontWeight={"bold"}>
                No users searched yet.
              </Text>
            )}
            {searchHistory.map((user) => (
              <Flex
                key={user.id}
                alignItems={"center"}
                bg={"whiteAlpha"}
                w={"full"}
                _hover={{ bg: "whiteAlpha.400" }}
                borderRadius={4}
                p={2}
                cursor={"pointer"}
                justifyContent={"space-between"}>
                <Flex gap={2} alignItems={"center"}>
                  <Avatar display={"block"} size={"lg"} name={user.name} src={user.avatar_url} />
                  <Box>
                    <Text fontWeight={"bold"}>{user.name || "User"}</Text>
                    <Text fontSize={"sm"} color={"gray.400"}>
                      {user.id}
                    </Text>
                  </Box>
                </Flex>
                <Flex alignItems={"center"} gap={4}>
                  <Link
                    href={user.url}
                    size={"sm"}
                    color="black"
                    bg="whatsapp.200"
                    px={2}
                    borderRadius={4}
                    _hover={{ textDecoration: "none", bg: "whatsapp.300" }}>
                    Visit
                  </Link>
                  <DeleteIcon color={"red.400"} onClick={() => handleDeleteUser(user.id)} />
                </Flex>
              </Flex>
            ))}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default HistoryModal;
