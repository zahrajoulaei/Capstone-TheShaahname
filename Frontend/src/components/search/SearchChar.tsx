import { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Character } from "../../types"




interface SearchCharProps {
  characters: Character[];
  onSearchResults: (searchResults: Character[]) => void;
}

export default function SearchChar({ characters, onSearchResults }: SearchCharProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSearch = () => {
    const filteredCharacters = characters.filter((character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredCharacters.length === 0) {
      setErrorMessage(`Sorry, there is no character called "${searchTerm}".`);
    } else {
      setErrorMessage(""); // Clear the error message if results are found
    }

    onSearchResults(filteredCharacters);
  };

  return (
    <div>
      <InputGroup className="search">
        <InputGroup.Text id="basic-addon1">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </InputGroup.Text>
        <FormControl
          placeholder="Search for a character..."
          aria-label="Search for a character"
          aria-describedby="basic-addon1"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="primary" onClick={handleSearch}>
          Search
        </Button>
      </InputGroup>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}