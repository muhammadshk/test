function cvsdigitalComponentsCvsCoreGlobalScript () {
  // or export default async function()
}

function cvsWalletGlobalScript () {
  // or export default async function()
}

const globalScripts = () => {
  cvsWalletGlobalScript();
  cvsdigitalComponentsCvsCoreGlobalScript();
};

export { globalScripts as g };
