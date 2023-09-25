export const Result = ({ result }) => (
    <p>
        {result && (
            <>
                {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;= {" "}

                <strong>
                    {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                </strong>
            </>
        )}
    </p>
);