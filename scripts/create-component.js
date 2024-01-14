const fs = require("fs");
const path = require("path");

// Content for index
const getIndexContent = (name) => {
  return `
    export { default } from "./${name}";
  `;
};

// Content for component
const getComponentContent = (name) => {
  return `
    type ${name}Props = {
  
    }
  
    const ${name} = ({}: ${name}Props) => {
      return(
        <div className=''></div>
      )
    }
  
    export default ${name}
  `;
};

// Function to extract component name from command line arguments
const getComponentName = () => {
  const nameIndex = process.argv.indexOf("--name") + 1;
  return nameIndex > 0 && nameIndex < process.argv.length
    ? process.argv[nameIndex]
    : null;
};

const createComponent = () => {
  // Check for the --screen flag
  const isScreen = process.argv.includes("--screen");

  const componentName = getComponentName();

  if (!componentName) {
    console.error(
      "❌ Error: No component name provided. Use --name followed by the component name."
    );
    process.exit(1);
  }

  const componentType = isScreen ? "Screen" : "Component";
  const baseDirectory = isScreen ? "src/screens" : "src/components";
  const directoryPath = path.join(
    __dirname,
    "../",
    baseDirectory,
    componentName
  );

  // Check if component with {componentName} already exists
  if (fs.existsSync(directoryPath)) {
    console.error(
      `❌ Error: ${componentType} with name "${componentName}" already exists.`
    );
    process.exit(1);
  }
  // Create directory
  else {
    fs.mkdirSync(directoryPath, { recursive: true });
  }

  // Create index.tsx with content
  const indexPath = path.join(directoryPath, "index.tsx");
  fs.writeFileSync(indexPath, getIndexContent(componentName));

  // Create {componentName}.tsx with content
  const componentPath = path.join(directoryPath, `${componentName}.tsx`);
  fs.writeFileSync(componentPath, getComponentContent(componentName));

  console.log(
    `⚡️ Successfully created "${componentName}" ${componentType.toLowerCase()} in ${baseDirectory}`
  );
};

const main = () => {
  createComponent();
};

main();
