window.onload = async (): Promise<void> => {
  console.log(performance.now() % 2 !== 0);
  await navigator.permissions.revoke({ name: "hrtime" });
  console.log(performance.now() % 2 === 0);
};
