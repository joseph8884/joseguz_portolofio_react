import "./portfolio.css";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const Portfolio = ({open, setOpen,selectedProject, setSelectedProject}) => {

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };
  return (
        <Dialog open={open} onClose={handleClose}>
          {selectedProject && (
            <>
              <DialogTitle>{selectedProject.name}</DialogTitle>
              <DialogContent>
                <img
                  src={selectedProject.img}
                  alt={selectedProject.name}
                  style={{ width: "100%" }}
                />
                <p>{selectedProject.description}</p>
                <p>
                  <strong>Technologies:</strong>{" "}
                  {selectedProject.technologies.join(", ")}
                </p>
                <p>
                  <strong>Role:</strong> {selectedProject.role}
                </p>
                <p>
                  <strong>Year:</strong> {selectedProject.year}
                </p>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Close
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
  );
};

export default Portfolio;
