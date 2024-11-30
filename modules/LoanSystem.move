module loan_system {
    use sui::object:{Self, UID};
    use sui::tx_context::{self, TxContext};
    use sui::balance;
    use sui::coin;
    use sui::sui::SUI;

    struct Loan has key {
        id:UID
        borrower: address,
        lender: address,
        amount: balance::Balance<SUI>, //Loan amount is in SUI
        interest_rate: u64,
        status: u8,
        collateral_id: option::Option<UID>
    }
    public fun create_loan(
        borrower: &signer,
        lender: address,
        amount: u64,
        interest_rate: u64,
        collateral_id: option::Option<UID>,
        ctx: &mut TxContext
    ):  Loan {
        let borrower_addr = signer::address_of(borrower);
        if (amount == 0) {
            abort 1; //invalid amount
        }
        Loan {
            id: UID::new(ctx),
            borrower: borrower_addr,
            lender,
            amount: balance::new<SUI>(amount),
            interest_rate,
            duration,
            status: 0 //pending
            collateral_id,
        }
    } 

    public fun approve_loan(loan: &mut Loan){
        if (loan.status != 0) {
            abort 2; //Loan not in pending state
        }
        loan.status = 1; //approve
    }
    public fun approve_land(loan: &mut Loan, repayment_amount: balance::Balance<SUI>) {
        let total_due = loan.amount.value() + (loan.amount.value() * loan.interest_rate) / 10000;
        if (repayment_amount.value() < total_due) {
            abort 3; // Insuffient repayment
        }
        loan.status = 2; //repaid

    }
    public fun get_loan_status(loan: &Loan): u8 {
        loan.status
    }
}
