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
                    <td>billmonto</td>
                    <td>tipPercentagetaje</td>
                    <td>tipotal</td>
                <td>total</td>
                </tr>
      
             {historyState.map((item: HistoryType)=>{
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


