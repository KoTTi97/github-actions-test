const getLatestVercelProductionDeploymentId = async () =>
{
  let preferredKey;

  switch(process.argv[2])
  {
    case "prefers-deployment-id":
      preferredKey = "id";
      break;
    case "prefers-deployment-url":
      preferredKey = "url";
      break;
    default:
      throw new Error("preferredKey must be either 'prefers-deployment-id' or 'prefers-deployment-url'");
  }

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

  console.log(JSON.stringify(data, null, 2));

  const latestDeploymentId = data.deployments[0].uid;
  const latestDeploymentUrl = data.deployments[0].url;

  if(!latestDeploymentId)
  {
    throw new Error("No deployment ID found");
  }

  // output the preferred key so the CI can use it
  if(preferredKey === "id")
  {
    console.log(latestDeploymentId);
  }
  else
  {
    console.log(latestDeploymentUrl);
  }
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
