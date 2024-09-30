export interface HistoryType {
	bill: number,
    tipPercentage:number,
    tip:number,
    total: number
}

export const History = ({historyState}) => {

	return (
        <>
            <table>
                <tr>
                    <td>billonto</td>
                    <td>tipPercentagetaje</td>
                    <td>tipotal</td>
                <td>total</td>
                </tr>
      
             {historyState.map((item)=>{
                return (       <tr>
                    <td>{item.bill}</td>
                    <td>{item.tipPercentage}</td>
                    <td>{item.tip}</td>
                    <td>{item.total}</td>
                    
                    </tr>
                )
                })}            
             
            </table>	
            
        </>
    )
}


