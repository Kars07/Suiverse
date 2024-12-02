module 0x0::loan_system {
    use sui::tx_context; // Removed alias for tx_context as it is already imported by default
    use sui::object; // Removed alias for UID as it is already imported by default

    public struct Loan has key {
        id: object::UID,
        borrower: address,
        lender: address,
        amount: u64,
        interest_rate: u64,
        status: u8, // 0 = pending, 1 = approved, 2 = repaid
        collateral_id: Option<object::UID>,
    }

    /// Create a new loan.
    public fun create_loan(
        lender: address,
        amount: u64,
        interest_rate: u64,
        collateral_id: Option<object::UID>,
        ctx: &mut tx_context::TxContext
    ): Loan {
        Loan {
            id: object::new(ctx),  // Correct UID instantiation
            borrower: tx_context::sender(ctx),
            lender,
            amount,
            interest_rate,
            status: 0,            // Default status: pending
            collateral_id,
        }
    }

    /// Approve a loan.
    public fun approve_loan(loan: &mut Loan) {
        assert!(loan.status == 0, 1); // Abort if not pending
        loan.status = 1;
    }

    /// Repay a loan.
    public fun repay_loan(
        loan: &mut Loan,
        repayment_amount: u64,
        ctx: &mut tx_context::TxContext
    ) {
        let total_due = loan.amount + (loan.amount * loan.interest_rate) / 100;
        assert!(repayment_amount >= total_due, 2); // Abort if repayment is insufficient
        loan.status = 2; // Mark as repaid
    }
}
