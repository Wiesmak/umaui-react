import { fileURLToPath } from "node:url";
import fs from "fs";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

function toPascalCase(name: string) {
  return name
    .replace(/[-_ ]+(.)/g, (_, c) => c.toUpperCase())
    .replace(/^[a-z]/, (c) => c.toUpperCase());
}

function toKebabCase(name: string) {
  return name
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
}

function main() {
  const [, , rawName] = process.argv;
  if (!rawName) {
    console.error("Usage: npm run generate-component ComponentName");
    process.exit(1);
  }

  const pascal = toPascalCase(rawName);
  const kebab = toKebabCase(pascal);

  const root = path.resolve(__dirname, "..", "src", "components", pascal);
  if (fs.existsSync(root)) {
    console.error(`Component folder already exists: ${root}`);
    process.exit(1);
  }

  fs.mkdirSync(root, { recursive: true });

  // Files
  const componentPath = path.join(root, `${pascal}.tsx`);
  const cssPath = path.join(root, `${pascal}.module.scss`);
  const storyPath = path.join(root, `${pascal}.stories.tsx`);

  const componentContent = `\
import styles from './${pascal}.module.scss';

interface ${pascal}Props {
  className?: string;
}

export default function ${pascal}({ className }: ${pascal}Props) {
  const combinedClassName = [styles.component, className].filter(Boolean).join(' ');
  return <div className={combinedClassName}>${pascal} component</div>;
}
`;

  const cssContent = `\
.component {
}
`;

  const storyContent = `\
import type { Meta, StoryObj } from '@storybook/react';
import ${pascal} from './${pascal}';

const meta: Meta<typeof ${pascal}> = {
  title: 'Components/${pascal}',
  component: ${pascal},
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ${pascal}>;

export const Default: Story = {
  args: {},
  render: (args) => <${pascal} {...args} />,
};
`;

  fs.writeFileSync(componentPath, componentContent, "utf8");
  fs.writeFileSync(cssPath, cssContent, "utf8");
  fs.writeFileSync(storyPath, storyContent, "utf8");

  console.log(`Component ${pascal} created at ${root}`);
  console.log("Files:");
  console.log(" -", path.basename(componentPath));
  console.log(" -", path.basename(cssPath));
  console.log(" -", path.basename(storyPath));
  console.log("");
  console.log("Add the following export to src/main.ts:");
  console.log(
    `  export { default as ${pascal} } from "./components/${pascal}/${pascal}";`
  );
  console.log("");
  console.log("Consumer Import example:");
  console.log(`  import { ${pascal} } from '@orangeii/umaui';`);
  console.log("");
  console.log("Done.");
}

main();
