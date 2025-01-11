import "./portfolio.css";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

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
