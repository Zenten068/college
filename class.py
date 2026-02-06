import string

def mod_inverse(a, m):
    """Finds the modular multiplicative inverse of a modulo m."""
    for x in range(1, m):
        if (a * x) % m == 1:
            return x
    return None

def solve():
    alphabet = string.ascii_uppercase
    m = 26

    print("--- PicoCTF: Guess My Cheese Solver ---")
    print("1. Connect to the server: nc verbal-sleep.picoctf.net 56453")
    
    # 1. Get the secret we need to decrypt
    encrypted_secret = input("\nEnter the 'secret cheese' from the server: ").strip().upper()
    
    # 2. Use the 'e' option on the server to encrypt 'ABC'
    # 'A' is index 0, 'B' is index 1. This makes the math very easy.
    print("\nOn the server, choose '(e)ncrypt a cheese' and enter: ABC")
    encrypted_abc = input("Enter the result the server gave for 'ABC': ").strip().upper()

    if len(encrypted_abc) < 2:
        print("Error: Need at least 2 characters to solve the equation.")
        return

    # 3. Solve for b:
    # Since 'A' is 0, the equation is: y = (a*0 + b) % 26 -> y = b
    y0 = alphabet.index(encrypted_abc[0])
    b = y0
    
    # 4. Solve for a:
    # Since 'B' is 1, the equation is: y1 = (a*1 + b) % 26 -> a = y1 - b
    y1 = alphabet.index(encrypted_abc[1])
    a = (y1 - b) % 26

    print(f"\n[+] Identified Keys for this session: a = {a}, b = {b}")

    # 5. Decrypt the secret
    a_inv = mod_inverse(a, m)
    if a_inv is None:
        print("[-] Error: 'a' has no modular inverse. Try reconnecting to get new keys.")
        return

    decrypted_word = ""
    for char in encrypted_secret:
        if char in alphabet:
            y = alphabet.index(char)
            # Decryption: x = a_inv * (y - b) % 26
            x = (a_inv * (y - b)) % m
            decrypted_word += alphabet[x]
        else:
            decrypted_word += char

    print(f"\n[!] The decrypted password is: {decrypted_word}")
    print("Now choose '(g)uess my cheese' on the server and enter that word!")

if __name__ == "__main__":
    solve()