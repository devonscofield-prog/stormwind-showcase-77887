/** Static Azure Range terminal window shown on the Cloud Training page. */
export const RangeTerminal = () => (
  <div className="range-term">
    <div className="range-term-bar">
      <i />
      <i />
      <i />
    </div>
    <pre>
      <span className="p">stormwind@range</span> <span className="dim">~</span> $ az group create -n{" "}
      <span className="k">rg-lab</span> -l eastus{"\n"}
      <span className="ok">✓</span> Resource group <span className="k">rg-lab</span> provisioned in 2.1s{"\n"}
      <span className="p">stormwind@range</span> <span className="dim">~</span> $ az vm create -g{" "}
      <span className="k">rg-lab</span> -n <span className="k">vm-web-01</span> --image Ubuntu2204{"\n"}
      <span className="ok">✓</span> VM <span className="k">vm-web-01</span> running · 10.0.1.4{"\n"}
      <span className="p">stormwind@range</span> <span className="dim">~</span> $ az aks create -g{" "}
      <span className="k">rg-lab</span> -n aks-lab --node-count 2{"\n"}
      <span className="dim">… provisioning cluster (scenario: AZ-104 · module 6)</span>
      {"\n"}
      <span className="p">stormwind@range</span> <span className="dim">~</span> $ range reset{"\n"}
      <span className="ok">✓</span> Environment reset. No ticket required.
    </pre>
  </div>
);

export default RangeTerminal;
