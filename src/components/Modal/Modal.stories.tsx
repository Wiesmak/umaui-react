import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";
import Button from "../Button/Button";
import { useModal } from "./modal";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    title: "Modal Title",
    closeOnEscape: true,
    closeOnClickOutside: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Button onClick={openModal}>Open Modal</Button>
      <Modal
        title="Modal Title"
        closeOnEscape
        closeOnClickOutside
        open={isOpen}
        onOpenChange={(nextOpen) => (nextOpen ? openModal() : closeModal())}
        footer={<Button onClick={closeModal}>Close Modal</Button>}
      >
        <p>Modal Content</p>
      </Modal>
    </>
  );
        `,
      },
    },
  },
  render: (args) => {
    const { isOpen, openModal, closeModal } = useModal();

    return (
      <>
        <Button onClick={openModal}>Open Modal</Button>
        <Modal
          {...args}
          open={isOpen}
          onOpenChange={(nextOpen) =>
            nextOpen ? openModal() : closeModal()
          }
          footer={<Button onClick={closeModal}>Close Modal</Button>}
        >
          <p>Modal Content</p>
        </Modal>
      </>
    );
  },
};
