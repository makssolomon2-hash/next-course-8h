interface DomainsIdProps {
  params: Promise<{domainsId: string }>;
}

export default async function DomainsId({params}:DomainsIdProps){
  const {domainsId} = await params;
  return(
    <div>
      <h1>Heloo from dynamic route</h1>

      <p>{domainsId}</p>
    </div>
  )
}