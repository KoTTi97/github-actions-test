const getLatestVercelProductionDeploymentId = async () =>
{
  const response = await fetch("https://api.vercel.com/v6/deployments?limit=2&target=production", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.VERCEL_ACCESS_TOKEN}`
    }
  })

  if(!response.ok)
  {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json()

  const latestDeploymentId = data.deployments[0].uid;

  if(!latestDeploymentId)
  {
    throw new Error("No deployment ID found");
  }

  // this is captured by the CI and used in the next step
  console.log(latestDeploymentId);
}

try
{
  void getLatestVercelProductionDeploymentId()
}
catch (e)
{
  console.log("an error occurred", e);
  process.exit(1);
}
